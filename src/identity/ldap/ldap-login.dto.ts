/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */
import { IsString } from 'class-validator';

export class LdapLoginDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
}
