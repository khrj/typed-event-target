<div align="center">
    <img src="assets/logo.svg" width="400" height="400" alt="typed_event_target illustration">
    <h1>Typed Event Target</h1>
    <p>
        <b>Strictly typed EventTarget for Deno and the Browser</b>
    </p>
    <p>
        <img alt="build status" src="https://img.shields.io/github/workflow/status/KhushrajRathod/TypedEventTarget/Deno?label=checks" >
        <img alt="language" src="https://img.shields.io/github/languages/top/KhushrajRathod/TypedEventTarget" >
        <img alt="code size" src="https://img.shields.io/github/languages/code-size/KhushrajRathod/TypedEventTarget">
        <img alt="issues" src="https://img.shields.io/github/issues/KhushrajRathod/TypedEventTarget" >
        <img alt="license" src="https://img.shields.io/github/license/KhushrajRathod/TypedEventTarget">
        <img alt="version" src="https://img.shields.io/github/v/release/KhushrajRathod/TypedEventTarget">
    </p>
    <p>
        <b><a href="https://deno.land/x/typed_event_target">View on deno.land</a></b>
    </p>
    <br>
    <br>
    <br>
</div>

## Usage

```ts
import { TypedCustomEvent, TypedEventTarget } from 'https://deno.land/x/typed_event_target@1.0.1/mod.ts'

type Events = {
    Hi: string
    Hello: boolean
}

const emitter = new TypedEventTarget<Events>()

emitter.addEventListener("Hi", (value) => {
    console.log(value.detail) // "Hello"
})

emitter.dispatchEvent(new TypedCustomEvent("Hi", { detail: "Hello" }))
```

## API

Same as [non-strict EventTarget](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget), however a parameter _must_ be passed to `TypedCustomEvent`.

## Supporters

[![Stargazers repo roster for @KhushrajRathod/TypedEventTarget](https://reporoster.com/stars/KhushrajRathod/TypedEventTarget)](https://github.com/KhushrajRathod/TypedEventTarget/stargazers)

[![Forkers repo roster for @KhushrajRathod/TypedEventTarget](https://reporoster.com/forks/KhushrajRathod/TypedEventTarget)](https://github.com/KhushrajRathod/TypedEventTarget/network/members)

## Related

- [Deno modules](https://github.com/KhushrajRathod/DenoModules)
