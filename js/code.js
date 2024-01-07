function generate(length, charset) {
   let password = '';
   for(let i = 0; i < length; ++i){
      password += charset[
          Math.floor(
              Math.random() * charset.length
         )
     ];
   }
   return password;
}
jQuery('button').on('click', function(){
var lab, ad
ad=jQuery('input').val();
lab=generate(ad, '+-*!&?=@abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
jQuery('body').append(lab,'<br>');
});