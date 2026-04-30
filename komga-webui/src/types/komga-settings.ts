export interface SettingsDto {
  deleteEmptyCollections: boolean,
  deleteEmptyReadLists: boolean,
  rememberMeDurationDays: number,
  thumbnailSize: ThumbnailSizeDto,
  thumbnailFormat: ThumbnailFormatDto,
  taskPoolSize: number,
  serverPort: SettingMultiSource<number>,
  serverContextPath: SettingMultiSource<string>,
  koboProxy: boolean,
  koboPort?: number,
  kepubifyPath: SettingMultiSource<string>,
}

export interface SettingMultiSource<T> {
  configurationSource?: T,
  databaseSource?: T,
  effectiveValue?: T,
}

export interface SettingsUpdateDto {
  deleteEmptyCollections?: boolean,
  deleteEmptyReadLists?: boolean,
  rememberMeDurationDays?: number,
  renewRememberMeKey?: boolean,
  thumbnailSize?: ThumbnailSizeDto,
  thumbnailFormat?: ThumbnailFormatDto,
  taskPoolSize?: number,
  serverPort?: number,
  serverContextPath?: string,
  koboProxy?: boolean,
  koboPort?: number,
  kepubifyPath?: string,
}

export enum ThumbnailSizeDto {
  DEFAULT = 'DEFAULT',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE',
}

export enum ThumbnailFormatDto {
  JPEG = 'JPEG',
  WEBP = 'WEBP',
}
