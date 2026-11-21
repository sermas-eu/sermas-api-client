# Sermas typescript API client

## Installation

```sh
npm i -s @sermas/api-client
```

## Usage

```ts
import {createSermasClient} from '@sermas/api-client'


const main = async () => {

    const client = await createSermasClient({
        appId: 'my-app',
        access_token: '<token>',
        refresh_token: '<token>',
        domain: 'http://localhost:8080',
    })

    const res = await client.api.authentication.whoami()

    console.log(`Hello from ${res.preferred_username}`)

}

main().catch(e => console.error(e))
```


## Development

The client is generated from the API's OpenAPI and AsyncAPI documents. Start the
API (the sermas-dev stack serves it on `http://localhost:8080`), then:

```sh
make generate   # download both documents, regenerate src/libs, build
```

`API_URL` points at another API. Use Node 24: the AsyncAPI tooling (`avsc`) fails
on Node 25. The generated code under `src/libs` is committed.

The kiosk and the web toolkit compile this client from its sources (a
`sermas-api-client` checkout beside theirs, or `API_CLIENT_DIR`), so a regenerated
client reaches them without a release.

## License
```
   Copyright 2024 Spindox Labs srl

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
```
