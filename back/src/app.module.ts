import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { EventModule } from "./event/event.module";
import { ParticipantModule } from "./participant/participant.module";
import { AdminModule } from "./admin/admin.module";
import { ThrottlerModule } from "@nestjs/throttler";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      "mongodb+srv://code-perdu:MztGBVfpMpow86dc@code-perdu.ypqsujm.mongodb.net/code-perdu?retryWrites=true&w=majority",
    ),
    ParticipantModule,
    EventModule,
    AdminModule,
    ThrottlerModule.forRoot([
      {
        ttl: 10 * 60,
        limit: 20,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
