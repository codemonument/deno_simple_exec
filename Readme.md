# simple_exec

A dead simple wrapper around the Deno.Command API for better stdout handling, by @codemonument

## Usage

Run `simpleExec(command: string, args[]: string[])`.  
Gets back

```ts
{
	stdout: string;
	stderr: string;
}
```
