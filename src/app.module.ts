import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { DocumentModule } from './document/document.module';
import { DocumentVersionModule } from './documentVersion/documentVersion.module';
import { FolderModule } from './folder/folder.module';
import { NotificationModule } from './notification/notification.module';
import { ActivityEventModule } from './activityEvent/activityEvent.module';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [
    UserModule,
    CommentModule,
    DocumentModule,
    DocumentVersionModule,
    FolderModule,
    NotificationModule,
    ActivityEventModule,
    S3Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
