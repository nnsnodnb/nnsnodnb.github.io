$(function() {

  // 郵便番号入力で自動的に住所を入力
  $('#inputZipcode').jpostal({
      postcode : [
        '#inputZipcode',
      ],
      address : {
        '#inputPrefecture'  : '%3',
        '#inputCity'  : '%4%5'
      }
   });

});
