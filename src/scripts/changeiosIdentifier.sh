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

perl -i -pe's/'"$1"'/'"$2"'/g' 'ios/reactnativeboilerplate.xcodeproj/project.pbxproj'