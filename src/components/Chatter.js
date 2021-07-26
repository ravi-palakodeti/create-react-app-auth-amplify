import React, { useEffect } from 'react';
import "amazon-connect-chatjs";

export const Chatter = (props) => {

 useEffect(() => {
  showChatWindow(window, document, 'amazon_connect', 'e4ee4ccc-fdd0-4e1d-a06f-168124489f8c')
  window.amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#123456' }, closeChat: { color: 'white', backgroundColor: '#123456' } });
  window.amazon_connect('snippetId', 'QVFJREFIZ25JVzc0R0xQTVpWSlI0RjdyVlBselRRYnQzeW5TZEVnWGFmQnNNZ0lXbmdIVm5qdDhkbmJoazFIZWc0K203VXVZQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNRWxPNkVMWWYyZFQ0K1d2UUFnRVFnQ3NHMVpzNVNvUm1kamZXR0pvcHFmQUlrUGNnMmVMeG92YzFUWk5XMVN2dm5GVmNQWWp1aXcrMzFzTlQ6Oi9jdG5qRy9ReUxPNHkweUIvWFlTazhzd3JWTmVwc3RxYlFkek9nWjRnRHQ0VmE4QlhHeSt0bnpKR201bkI0WFIvbjJHdG9LYUxHMGR0MXJYVGFGZUcwSlptTVB3eGZvaFJobGhsZ3VjL1BraGx0RFBCR1JsY0dSK3FQTG9VYlFGV2YwNXlwclFtMWtoZGpRbyswWUVuU0J4SExTREhPVT0=');
  console.log("Done: attempting to load chat")
 });

 function showChatWindow(w, d, x, id) {
  const s = d.createElement('script');
  s.src = 'https://dend6g4sigg57.cloudfront.net/amazon-connect-chat-interface-client.js';
  s.async = 1;
  s.id = id;
  d.getElementsByTagName('head')[0].appendChild(s);
  w[x] = w[x] || function () { (w[x].ac = w[x].ac || []).push(arguments) };
 }

 return (
  <React.Fragment>   
  </React.Fragment>
 )
}