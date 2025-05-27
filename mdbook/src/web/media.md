# media player

```
Uncaught (in promise) AbortError: The play() request was interrupted by a new load request. https://goo.gl/LdLk22
setProp @ react-dom_client.js?v=b2930d9f:12334
updateProperties @ react-dom_client.js?v=b2930d9f:13178
commitUpdate @ react-dom_client.js?v=b2930d9f:13954
runWithFiberInDEV @ react-dom_client.js?v=b2930d9f:1483
commitHostUpdate @ react-dom_client.js?v=b2930d9f:8728
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9511
recursivelyTraverseMutationEffects @ react-dom_client.js?v=b2930d9f:9363
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9500
recursivelyTraverseMutationEffects @ react-dom_client.js?v=b2930d9f:9363
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9372
recursivelyTraverseMutationEffects @ react-dom_client.js?v=b2930d9f:9363
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9500
recursivelyTraverseMutationEffects @ react-dom_client.js?v=b2930d9f:9363
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9500
recursivelyTraverseMutationEffects @ react-dom_client.js?v=b2930d9f:9363
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9372
recursivelyTraverseMutationEffects @ react-dom_client.js?v=b2930d9f:9363
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9653
recursivelyTraverseMutationEffects @ react-dom_client.js?v=b2930d9f:9363
commitMutationEffectsOnFiber @ react-dom_client.js?v=b2930d9f:9549
flushMutationEffects @ react-dom_client.js?v=b2930d9f:11096
commitRoot @ react-dom_client.js?v=b2930d9f:11077
commitRootWhenReady @ react-dom_client.js?v=b2930d9f:10510
performWorkOnRoot @ react-dom_client.js?v=b2930d9f:10455
performSyncWorkOnRoot @ react-dom_client.js?v=b2930d9f:11633
flushSyncWorkAcrossRoots_impl @ react-dom_client.js?v=b2930d9f:11534
processRootScheduleInMicrotask @ react-dom_client.js?v=b2930d9f:11556
(anonymous) @ react-dom_client.js?v=b2930d9f:11647
```

< audio > 태그를 이용해 mp3 파일을 재생하는데 가끔 이런 에러가 난다. 

[https://goo.gl/LdLk22](https://goo.gl/LdLk22)

여기에 해결책이 있다.

