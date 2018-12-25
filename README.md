# RingCentral Chatbot skill: Ping

This skill enables the chatbot to reply with "pong" when it received "ping".

It should be used together with [RingCentral Chatbot framework for JavaScript](https://github.com/ringcentral/ringcentral-chatbot-js).


## Install

```
yarn add ringcentral-chatbot-skill-ping
```


## Basic Sample

```js
import createApp from 'ringcentral-chatbot/dist/apps'
import pingSkill from 'ringcentral-chatbot-skill-ping'

const app = createApp(undefined, [pingSkill])
```


## Advanced Sample

```js
import createApp from 'ringcentral-chatbot/dist/apps'
import pingSkill from 'ringcentral-chatbot-skill-ping'
// import fooSkill from 'ringcentral-chatbot-skill-foo'
// import barSkill from 'ringcentral-chatbot-skill-bar'

const handle = async event => {
  // event handling code
}

const app = createApp(handle, [
  pingSkill,
//   fooSkill,
//   barSkill
])
app.listen(3000)
```
