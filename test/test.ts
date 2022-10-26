import { assertEquals, assertThrows } from "../deps.ts"
import { TypedCustomEvent, TypedEventTarget } from "../mod.ts"

type Events = {
    Hi: string
    Hello: boolean
}

const e = new TypedEventTarget<Events>()

/**
 * The following errors will be caught by the linter if unused
 */
// Incorrect Syntax
// @ts-expect-error reason: test
assertThrows(() => e.dispatchEvent(new TypedCustomEvent("Hi", "Hello")))
// @ts-expect-error reason: test
assertThrows(() => e.dispatchEvent(new TypedCustomEvent("Hello", true)))

// Invalid Types
// @ts-expect-error reason: test
e.dispatchEvent(new TypedCustomEvent("Hi", {detail: 1}))
// @ts-expect-error reason: test
e.dispatchEvent(new TypedCustomEvent("Hello", {detail: "Hi"}))
// @ts-expect-error reason: test
e.addEventListener("Hi", (value: string) => value)

Deno.test("String", () => {
    e.addEventListener("Hi", (value) => {
        assertEquals(typeof value.detail, "string")
    }, { once: true })
    e.dispatchEvent(new TypedCustomEvent("Hi", { detail: "Hello" }))
})

Deno.test("Boolean", () => {
    e.addEventListener("Hello", (value) => {
        assertEquals(typeof value.detail, "boolean")
    }, { once: true })
    e.dispatchEvent(new TypedCustomEvent("Hello", { detail: true }))
})
