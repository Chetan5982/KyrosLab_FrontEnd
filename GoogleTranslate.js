// // GoogleTranslate.js
// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     const body= document.body
//     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     script.async = true;
//     document.body.appendChild(script);

//     window.googleTranslateElementInit = function() {
//       new window.google.translate.TranslateElement({
//         pageLanguage: 'en',
//         includedLanguages: 'en,hi,nl,zh-CN,ar',
//         layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         autoDisplay: false
//       }, 'google_translate_element');
//     };
    

//     return () => {
//         body?.removeChild(script)
//       document.body.removeChild(script);
//       delete window.googleTranslateElementInit;
//     };
//   }, []);

//   return <div id="google_translate_element" className='google-translate-wrapper'></div>;
// };

// export default GoogleTranslate;
