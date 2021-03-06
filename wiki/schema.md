## `Users`
column name     | data type | details
----------------|-----------|-----------------------
`id `             | integer   | not null, primary key
`email  `      | string    | not null, indexed, unique
`first_name` | string | not null
`last_name` | string | not null
`state` | string | not null
`dob` | date  | optional
`address` | string | optional
`country` | string  | optional
`password_digest` | string    | not null
`session_token`   | string    | not null, indexed, unique
`created_at` | datetime | not null
`updated_at` | datetime | not null

<!-- ## `Coins`
column name     | data type | details
----------------|-----------|---------------
`id` | integer | not null, primary key
`symbol` | char(3) | not null
`name` | string | not null
`market_cap` | float | not null
`description` | text | not null
`created_at` | datetime | not null
`updated_at` | datetime | not null -->

## `Transactions`
column name     | data type | details
----------------|-----------|---------------
`user_id` | integer | not null, foreign key
`symbol` | char(3)  | not null
`purchase_date` | date | not null
`purchase_amount`   | float | not null
`purchase_price` | float  | not null

## `PortfolioItem`
column name | data type | details
------------|-----------|---------
`id` | integer | not null, primary key
`amount` | float | not null
`user_id` | integer | not null, foreign key
`coin_sym`   | string | 3 char coin symbol
`created_at` | datetime | not null
`updated_at` | datetime | not null

<!-- ## `Portfolio-Coins`
column name | data type | details
------------|-----------|---------
`id` | integer | not null, primary key
`coin_id` | string | not null, foreign key
`portfolio_id` | integer | not null, foreign key
`created_at` | datetime | not null
`updated_at` | datetime | not null -->

## `Following`
column name | data type | details
------------|-----------|---------
`id` | integer | not null, primary key
`user_id` | integer | not null, foreign key
`coin_id` | integer | not null, foreign key
`created_at` | datetime | not null
`updated_at` | datetime | not null
