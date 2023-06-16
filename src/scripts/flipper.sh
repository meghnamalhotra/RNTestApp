if open -Ra "Flipper" ; then
  open -a "Flipper"
else
  echo "ERROR: 'Flipper' is not installed, downloading flipper now"
  open 'https://www.facebook.com/fbflipper/public/mac'
fi