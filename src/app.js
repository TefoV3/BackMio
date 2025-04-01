import express from 'express'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/auth_routes.js'

import {ActivityRouter} from './routes/activity_routes.js'
import {AssignmentRouter} from './routes/assignment_routes.js'
import {EvidenceRouter} from './routes/evidences_routes.js'
import {InitialConsultationsRouter} from './routes/initial_consultations_routes.js'
import {InternalUserRouter} from './routes/internal_user_routes.js'
import {UserRouter} from './routes/user_routes.js'
import { AuditRouter } from './routes/audit_routes.js'
import { corsMiddleware } from './middlewares/cors.js'
import {SocialWorkRouter} from './routes/social_work_routes.js'
import { LivingGroupRouter } from './routes/living_group_routes.js'
import { ActivityRecordRouter } from "./routes/activity_record_routes.js";

//Parameter Routes
import { CaseStatusRouter } from './routes/parameter_routes/case_status_routes.js'
import { CatastrophicIllnessRouter } from './routes/parameter_routes/catastrophic_illness_routes.js'
import { DisabilityRouter } from './routes/parameter_routes/disability_routes.js'
import { ProfilesRouter } from './routes/parameter_routes/profiles_routes.js'
import { ScheduleRouter } from './routes/parameter_routes/schedule_routes.js'
import { ProtocolsRouter } from './routes/parameter_routes/protocols_routes.js'
import { TypeOfAttentionRouter } from './routes/parameter_routes/type_of_attention_routes.js'
import { VulnerableSituationRouter } from './routes/parameter_routes/vulnerable_situation_routes.js'
import { OccupationsRouter } from './routes/parameter_routes/occupations_routes.js'
import { IncomeLevelRouter } from './routes/parameter_routes/income_level_routes.js'
import { FamilyGroupRouter } from './routes/parameter_routes/family_group_routes.js'
import { FamilyIncomeRouter } from './routes/parameter_routes/family_income_routes.js'
import { TypeOfHousingRouter } from './routes/parameter_routes/type_of_housing_routes.js'
import { OwnAssetsRouter } from './routes/parameter_routes/own_assets_routes.js'
import { PensionerRouter } from './routes/parameter_routes/pensioner_routes.js'
import { HealthInsuranceRouter } from './routes/parameter_routes/health_insurance_routes.js'
import { ZoneRouter } from './routes/parameter_routes/zone_routes.js'
import { SectorRouter } from './routes/parameter_routes/sector_routes.js'
import { ProvinceRouter} from './routes/parameter_routes/province_routes.js'
import { CityRouter } from './routes/parameter_routes/city_routes.js'
import { CountryRouter } from './routes/parameter_routes/country_routes.js'
import { SubjectRouter } from './routes/parameter_routes/subject_routes.js' 
import { TopicRouter } from './routes/parameter_routes/topic_routes.js'
import { EthnicityRouter } from './routes/parameter_routes/ethnicity_routes.js'
import { CivilStatusRouter } from './routes/parameter_routes/civil_status_router.js'
import { SexRouter } from './routes/parameter_routes/sex_routes.js'
import { DerivedByRouter } from './routes/parameter_routes/derived_by_routes.js'
import { AcademicInstructionRouter } from './routes/parameter_routes/academic_instructions_routes.js'
import {ComplexityRouter} from './routes/parameter_routes/complexity_routes.js'
import {DocumentationBackupRouter} from './routes/parameter_routes/documentation_backup_routes.js'
import {PeriodTypeRouter} from './routes/parameter_routes/period_type_routes.js'
import {NumberOfAttemptsRouter} from './routes/parameter_routes/number_of_attempts_routes.js'
import {PracticalHoursRouter} from './routes/parameter_routes/practical_hours_routes.js'


//Schedules routes
import { AlertaRouter } from './routes/schedule_routes/Alerta_Routes.js'
import { HorarioRouter } from './routes/schedule_routes/Horario_routes.js'
import { HorasExtraordinariasRouter } from './routes/schedule_routes/Horas_Extraordinarias_Routes.js'
import { Parametro_HorarioRouter } from './routes/schedule_routes/Parametro_Horario_Routes.js'
import { PeriodoRouter } from './routes/schedule_routes/Periodo_routes.js'
import { Registro_Asistencias_Routes } from './routes/schedule_routes/Registro_Asistencia_Routes.js'
import { ResumenHorasRouter } from './routes/schedule_routes/Resumen_Horas_routes.js'
import { Seguimiento_SemanalRouter } from './routes/schedule_routes/Seguimiento_Semanal_Routes.js'
import { UsuarioXPeriodoRouter } from './routes/schedule_routes/UsuarioXPeriodo_Routes.js'



const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(corsMiddleware())
app.use(authRoutes); //No se usa authMiddleware porque no se necesita autenticación para acceder al Login y Olvidé mi contraseña

app.use(ActivityRouter)
app.use(AssignmentRouter)
app.use(EvidenceRouter)
app.use(InitialConsultationsRouter)
app.use(InternalUserRouter)
app.use(UserRouter)
app.use(AuditRouter)
app.use(SocialWorkRouter);
app.use(LivingGroupRouter)
app.use(ActivityRecordRouter);

//Parameter Routes
app.use(CaseStatusRouter)
app.use(CatastrophicIllnessRouter)
app.use(DisabilityRouter)
app.use(ProfilesRouter)
app.use(ScheduleRouter)
app.use(ProtocolsRouter)
app.use(TypeOfAttentionRouter)
app.use(VulnerableSituationRouter)
app.use(OccupationsRouter)
app.use(IncomeLevelRouter)
app.use(FamilyGroupRouter)
app.use(FamilyIncomeRouter)
app.use(TypeOfHousingRouter)
app.use(OwnAssetsRouter)
app.use(PensionerRouter)
app.use(HealthInsuranceRouter)
app.use(ZoneRouter)
app.use(SectorRouter)
app.use(ProvinceRouter)
app.use(CityRouter)
app.use(CountryRouter)
app.use(SubjectRouter)
app.use(TopicRouter)
app.use(EthnicityRouter)
app.use(CivilStatusRouter)
app.use(SexRouter)
app.use(DerivedByRouter)
app.use(AcademicInstructionRouter)
app.use(ComplexityRouter)
app.use(DocumentationBackupRouter)
app.use(PeriodTypeRouter)
app.use(NumberOfAttemptsRouter)
app.use(PracticalHoursRouter)

//Schedules routes
app.use(AlertaRouter)
app.use(HorarioRouter)
app.use(HorasExtraordinariasRouter)
app.use(Parametro_HorarioRouter)
app.use(PeriodoRouter)
app.use(Registro_Asistencias_Routes)
app.use(ResumenHorasRouter)
app.use(Seguimiento_SemanalRouter)
app.use(UsuarioXPeriodoRouter)


export default app;