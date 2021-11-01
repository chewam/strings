# Pull The Strings Website

### Environment variables

| variable                 | usage | visibility | description                                                          |
|--------------------------|-------|------------|----------------------------------------------------------------------|
| NEXT_PUBLIC_MAPBOX_TOKEN | build | public     | Mapbox service token to display office location on the landing page. |
| MAILJET_APIKEY_PUBLIC    | run   | private    | Mailjet service public key to send candidate contact email.          |
| MAILJET_APIKEY_PRIVATE   | run   | private    | Mailjet service private key to send candidate contact email.         |
| POSTGRES_PORT            | run   | private    | Postgres database port.                                              |
| POSTGRES_USERNAME        | run   | private    | Postgres database username.                                          |
| POSTGRES_PASSWORD        | run   | private    | Postgres database user password.                                     |
| POSTGRES_DATABASE        | run   | private    | Postgres database name.                                              |
| POSTGRES_HOST            | run   | private    | Postgres database host.                                              |
