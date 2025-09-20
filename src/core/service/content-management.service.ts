import { Inject, Injectable } from '@nestjs/common';
import { VideoDAO } from '@src/persistence/dao/video.dao';

export interface CreateContentData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
}

@Injectable()
export class ContentManagementService {
  constructor(
    @Inject(VideoDAO)
    private readonly videoDAO: VideoDAO,
  ) {}

  async createContent(createContentData: CreateContentData) {
    const createdVideo = this.videoDAO.create(createContentData);
    return createdVideo;
  }
}
