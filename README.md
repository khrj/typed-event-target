<div align="center">
    <img src="assets/logo.svg" width="400" height="400" alt="typed_event_target illustration">
    <h1>Typed Event Target</h1>
    <p>
        <b>Strictly typed EventTarget for Deno and the Browser</b>
    </p>
    <p>
        <img alt="build status" src="https://img.shields.io/github/workflow/status/khrj/typed-event-target/Deno?label=checks" >
        <img alt="language" src="https://img.shields.io/github/languages/top/khrj/typed-event-target" >
        <img alt="code size" src="https://img.shields.io/github/languages/code-size/khrj/typed-event-target">
        <img alt="issues" src="https://img.shields.io/github/issues/khrj/typed-event-target" >
        <img alt="license" src="https://img.shields.io/github/license/khrj/typed-event-target">
        <img alt="version" src="https://img.shields.io/github/v/release/khrj/typed-event-target">
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

[![Stargazers repo roster for @khrj/typed-event-target](https://reporoster.com/stars/khrj/typed-event-target)](https://github.com/khrj/typed-event-target/stargazers)

[![Forkers repo roster for @khrj/typed-event-target](https://reporoster.com/forks/khrj/typed-event-target)](https://github.com/khrj/typed-event-target/network/members)

## Related

- [Deno modules](https://github.com/khrj/deno-modules)
