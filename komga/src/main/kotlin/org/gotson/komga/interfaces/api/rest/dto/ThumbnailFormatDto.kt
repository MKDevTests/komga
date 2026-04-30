package org.gotson.komga.interfaces.api.rest.dto

import org.gotson.komga.domain.model.ThumbnailFormat

enum class ThumbnailFormatDto {
  JPEG,
  WEBP,
}

fun ThumbnailFormat.toDto() =
  when (this) {
    ThumbnailFormat.JPEG -> ThumbnailFormatDto.JPEG
    ThumbnailFormat.WEBP -> ThumbnailFormatDto.WEBP
  }

fun ThumbnailFormatDto.toDomain() =
  when (this) {
    ThumbnailFormatDto.JPEG -> ThumbnailFormat.JPEG
    ThumbnailFormatDto.WEBP -> ThumbnailFormat.WEBP
  }
