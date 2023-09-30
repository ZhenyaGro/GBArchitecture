// Интерфейс смены модели
export interface IModelChanger {
  NotifyChange(sender: IModelChanger): void;
}