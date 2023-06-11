-- AlterTable
CREATE SEQUENCE preferences_id_seq;
CREATE SEQUENCE preferences_userid_seq;
ALTER TABLE "Preferences" ALTER COLUMN "id" SET DEFAULT nextval('preferences_id_seq'),
ALTER COLUMN "userId" SET DEFAULT nextval('preferences_userid_seq');
ALTER SEQUENCE preferences_id_seq OWNED BY "Preferences"."id";
ALTER SEQUENCE preferences_userid_seq OWNED BY "Preferences"."userId";
