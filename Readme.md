# simple_exec

A dead simple wrapper around the Deno.Command API for better stdout handling, by
@codemonument

## Usage

Run `simpleExec(command: string, args[]: string[])`.\
Gets back

```ts
{
	stdout: string;
	stderr: string;
}
```

## On Registries

- nest.land: https://nest.land/package/simple_exec


---

# Developer Infos

## Publish to nest.land

Module URL: https://nest.land/package/simple_exec

1. Install `eggs` cli:
   `deno install -Af --unstable https://x.nest.land/eggs@0.3.10/eggs.ts` UPDATE:
   Use eggy cli instead of eggs, since eggs is broken since Deno 1.26:
   https://github.com/nestdotland/eggs/issues/141
   `deno install -Afq --unstable https://x.nest.land/eggy@0.3.50/cli.ts`
2. `eggy link <your key>` (used codemonument account)
3. `eggy publish`
