#!/bin/sh
#usage npm run changeAppId currentPackageName nextPackageName

if [ -z $1 ]; then
    echo "Please provide the current package name"
    exit 1
fi

if [ -z $2 ]; then
    echo "Please provide the new package name"
    exit 1
fi

change() {
    if [[ $1 == *.java ]] || [[ $1 == *.xml ]]; then
       perl -i -pe's/'"$2"'/'"$3"'/g' $1
    fi
}

for filename in $(find "android/app/src"); do
    change $filename $1 $2
done

# Add filename in this array if package name is used in that file
file_array=("android/app/BUCK" "android/app/build.gradle" "android/app/google-services.json")

for filename in "${file_array[@]}"; do
    perl -i -pe's/'"$1"'/'"$2"'/g' $filename
done