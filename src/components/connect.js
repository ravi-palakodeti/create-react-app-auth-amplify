connect.ChatSession.setGlobalConfig({
 region: "" // TODO: Fill in with your region, such as 'us-west-2'
});

var session;

$(document).ready((a) => {
 $("#sendChat").click(() => {
  sendChat();
 });

 $("#getTranscript").click(() => {
  getTranscript();
 });

 $("#endChat").click(() => {
  endChat();
 });

 $("#sendTyping").click(() => {
  sendTypingEvent();
 });
});

$(function () {
 $('#contactDetails').submit(function (e) {
  e.preventDefault();

  customerName = $('#firstName').val();
  if (!customerName) {
   alert('you must enter a name');
  } else {
   var contactFlowId = ""; // TODO: Fill in. You can find the contact flow id when viewing a contact flow. For example, if the arn for your flow is 'arn:aws:connect:us-west-2:123456789012:instance/11111111-1111-1111-1111-111111111111/contact-flow/22222222-2222-2222-2222-222222222222', the contact flow id is '22222222-2222-2222-2222-222222222222'
   var instanceId = ""; // TODO: Fill in You can find the instance id when viewing a contact flow. For example, if the arn for your flow is 'arn:aws:connect:us-west-2:123456789012:instance/11111111-1111-1111-1111-111111111111/contact-flow/22222222-2222-2222-2222-222222222222', the instance id is '11111111-1111-1111-1111-111111111111'
   var apiGatewayEndpoint = ""; // TODO: Fill in with the API Gateway endpoint created by your CloudFormation template. It should look like this: https://${apiId}.execute-api.${region}.amazonaws.com/Prod

   console.log("this is the first name:" + customerName);
   document.getElementById("contactDetails").reset();

   var initiateChatRequest = {
    ParticipantDetails: {
     DisplayName: customerName
    },
    ContactFlowId: contactFlowId,
    InstanceId: instanceId
   };

   $.ajax({
    url: apiGatewayEndpoint,
    type: "POST",
    async: false,
    data: JSON.stringify(initiateChatRequest),
    success: function (result) {
     console.log("Success!");
     console.log(JSON.stringify(result));
     session = connect.ChatSession.create({
      chatDetails: result.data.startChatResult,
      type: "CUSTOMER"
     });
    },
    error: function (result) {
     console.log("Error:");
     console.log(result);
    },
    complete: function (data) {
     console.log("Complete: " + JSON.stringify(data));
     session.connect().then((response) => {
      console.log("successful connection: " + JSON.stringify(response));
      return response;
     }, (error) => {
      console.log("unsuccessful connection " + JSON.stringify(error));
      return Promise.reject(error);
     });

     session.onConnectionEstablished((data) => {
      console.log("Established!");
     })

     session.onMessage((message) => {
      console.log("Received message: " + JSON.stringify(message));
     });

     session.onTyping((typingEvent) => {
      if (typingEvent.data.ParticipantRole === "AGENT") {
       console.log("Agent is typing ");
      }
     });

     session.onConnectionBroken((data) => {
      console.log("Connection broken");
     });
    }
   });
  }
 });
});

function sendChat() {
 var message = document.getElementById("chatContent").value;
 console.log("Clicked with message " + message);

 session.controller.sendMessage({
  message: message,
  contentType: "text/plain"
 })
}

function getTranscript() {
 session.getTranscript({
  scanDirection: "BACKWARD",
  sortOrder: "ASCENDING",
  maxResults: 15
 }).then(response => {
  console.log("Current transcript: ");
  console.log(JSON.stringify(response.data.Transcript));
  $('#chatTranscript').text(JSON.stringify(response.data.Transcript));
 });
}

function endChat() {
 session.controller.disconnectParticipant();
}

function sendTypingEvent() {
 session.controller.sendEvent({
  contentType: "application/vnd.amazonaws.connect.event.typing"
 });
}