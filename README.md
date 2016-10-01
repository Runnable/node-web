# RunnableDemo Sample NodeJS Front-end application

## Running locally

#### Installation
```bash
$ npm install
$ npm start
```

#### Development (live-reload server)
```bash
$ npm run dev
```

## Running on Runnable.io

This guide will help you setup Runnable templates for a simple Node.js web application. This guide will assume that you don't have a Dockerfile and want Runnable to generate the Dockerfile for you using a simple setup guide.

### Configuring the App 

1. Choose your GitHub org.
2. On the _Configure_ page, click on the __Create Template__ button.  
![node1](/images/node1.png)  
3. Find the repository you would like to configure the template for. In this case, we are starting with the `node-web` repository.  
![node2](/images/node2.png)  
4. Choose the first option to use our simple setup guide.
![node2](/images/node2a.png)  
5. Give your template a name. This name will be used to generate the template URLs of all the containers that will launch from this template. Check out [this](http://https://runnable.zendesk.com/hc/en-us/articles/212802006) article for more details on URLs in Runnable.
![node2](/images/node2b.png)  
6. Next, you’ll be able to select your app’s Stack Type, Version and Branch for your template. Go ahead and choose Node.js for your stack type, and select the version you want to use. Make sure you choose the branch that corresponds to your team’s main integration branch (‘master’  or ‘develop’ for example).  
![node3](/images/node3.png)  
6. On the next step, you can specify additional Packages, Build Commands, and the Container CMD. 

#### Packages 

This option allows you to install any tools, libraries, or frameworks you need. Add multiple packages by separating them with spaces. You can specify packages that are listed in the Ubuntu Aptitude library.
![node4](/images/node4.png)  

#### Build Commands

Use this option to specify any commands needed to build and prepare your app (supports UNIX bash format). These commands will run in the root folder of the repository after every push. This is also the perfect place to run any commands to build any assets (such as css, html and minified javascript code). 

For our simple API repository, this is where we’ll specify "npm install".
![node5](/images/node5.png)  

Note: Build commands cannot connect to any other container during a build. It is therefore not recommended to seed databases or communicate with another container using the Build Commands.

#### Container CMD 

Here the main run command for your app is specified. Important: the container will stop running when this command exits. For our simple API repository, we will specify "npm start".

NOTE: Commands that run here will have network access to other Runnable containers. TIP: use "&&" to run multiple commands; for example, to run a migration on your database and start your app, you can specify "npm run migrations && npm start"

![node6](/images/node6.png)  

10. Click Next. Additional configuration options are revealed to customize your container further:

#### Environment Variables

Add any required Environtment Variables your app may need. These values will be inserted into a container's environment when it launches from the template. The the syntax for entering in Environment variables is KEY=VAL i.e. if you are trying to set the "CONFIG" to "DEV", you would input "CONFIG=DEV".

#### Files & SSH Keys

Use this tool to add any addtional configuration files, other GitHub repositories, SSH Keys or assets your repository needs to build and run properly. This is also the option to use if you have to upload any override files to overwrite any hard coded values in your repository.

For more details, Check Out:

1. [Adding Files to your Container](https://support.runnable.com/hc/en-us/articles/208221743)
2. [Adding SSH Keys to build private modules](https://support.runnable.com/hc/en-us/articles/208018586-My-build-is-failing-because-of-No-Such-Key-or-Host-key-verification-failed-What-do-I-do-)

#### Exposed Ports

Open up any ports your repository may need. 

Our simple API repository only needs port "3000" to be open. 
![node7](/images/node7.png)  

1. Once you are happy with Save & Build to save our changes and trigger your first build. 
2. You will be automatically transitioned to the Logs tab of your configuration. Here you will be able to access:

#### Build Logs

These logs correspond to all the output from the build process of your template. Any errors here will correspond to configuration options you have specified in your repository, Build Commands, Packages and Files & SSH keys. 

![node8](/images/node8.png)  

#### CMD Logs 

These logs correspond to all the output from the run process of a container launched from your template. Any errors here will correspond to configuration options you have specified in your CMD Command or Environment Variables. 

![node9](/images/node9.png)  

> Your repository can crash for several reasons outside of your configuration on Runnable. There could be several factors ranging from a bug in your code or a misconfigured connection. 

#### Terminal

This is a terminal session into a container launched from your template. This is useful to verify any configuration details you may want to confirm.

![node10](/images/node10.png)  

#### URL

This is the Environment URL corresponding to the container launched from the default branch. Check [this](https://support.runnable.com/hc/en-us/articles/212802006-Runnable-URLs) article out for more about Runnable URLs.

![node12](/images/node12.png)  

* If everything went well, your build will complete successfully. Anytime you run across an error that you need help with, we have developers ready to help in real-time. Click on the chat bubble on the bottom left!  

Head on over to our [Branches](https://support.runnable.com/hc/en-us/sections/202755686-Branches) section to see how you can add your branches and start auto-isolation.

## Credits
- https://github.com/Granze/react-starterify
