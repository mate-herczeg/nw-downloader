# nw-downloader

nw.js downloader

## Config 
+ **version**
	+ type: string
	+ default value: ''
	+ valid values: >= v0.13.0
+ **architecture**:
	+ type: string
	+ default value: ''
	+ valid values: x64, ia32
+ **type**:
	+ type: string
	+ default value: normal
	+ valid values: normal, sdk
+ **platform**:
	+ type: string
	+ default value: ''
	+ valid values: linux, win, osx
+ **tmpFolder**:
	+ type: string
	+ default value: ./tmp
	+ valid values: writeable folder path

## Javascript Example
```
$ node
> let nwDownloader = require('./index.js')
> let downloadPromise = nwDownloader({ 
	version: 'v0.19.2', 
	architecture: 'x64', 
	type: 'sdk', 
	tmpFolder: './tmp', 
	platform: 'linux' 
})

downloadPromise.then(
	() => console.log('Download was sucessful'), 
	(error) => console.log('There was an error during download', error)
)

```