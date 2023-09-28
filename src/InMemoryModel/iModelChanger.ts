// Интерфейс смены модели
export interface iModelChanger {
  NotifyChange(sender: iModelChanger): void;
}