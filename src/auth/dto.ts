import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '12345678',
  })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '12345678',
  })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
