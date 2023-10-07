package Models;

import java.util.Date;

/**
 * Модель билета
 */
public class Ticket{
    private long id;
    private Date date;
    private int routeNumber;
    private int zoneStart;
    private int zoneStop;
    private int price;
    private Date timeStart;
    private Date timeStop;
    private boolean isValid;
    private boolean isUsed;
    private int place;


    public Ticket(int routeNumber, int place, int price, Date date, boolean isValid) {
        this.routeNumber = routeNumber;
        this.place = place;
        this.price = price;
        this.date = date;
        this.isValid = isValid;
    }


    public int getRoutNumber(){
        return this.routeNumber;
    }

    public int getPlace(){
        return this.place;
    }

    public int getPrice(){
        return this.price;
    }

    public Date getDate(){
        return this.date;
    }

    public boolean getValid(){
        return this.isValid;
    }

    public void setValid(boolean isValid){
        this.isValid = isValid;
    }

    public void setUsed(boolean isUsed){
        this.isUsed = isUsed;
    }

    public void setZoneStart(int zoneStart){
        this.zoneStart = zoneStart;
    }

    public void setZoneStop(int zoneEnd){
        this.zoneEnd = zoneEnd;
    }


    @Override
    public String toString() {
        return "Ticket" +
                " Route Number " + routeNumber +
                ", Place " + place +
                ", Price " + price + " rub." +
                ", Date " + date +
                ", " + (isValid ? "Free" : "Busy");
    }


    public String toPrint() {
        return "Ticket" +
                "\nRoute Number " + routeNumber +
                "\nPlace " + place +
                "\nPrice " + price + "rub." +
                "\nDate " + date;
    }

    @Override
    public int hashCode() {
        return date.hashCode() ^ (routeNumber + place + price);
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null || obj.getClass() != this.getClass()) {
            return false;
        }
        return this.equals((Ticket) obj);
    }


    public boolean equals(Ticket ticket) {
        boolean isIt = ticket != null
                && ticket.getRouteNumber() == this.routeNumber
                && ticket.getPlace() == this.place
                && ticket.getPrice() == this.price
                && ticket.getDate() == this.date
                && ticket.hashCode() == this.hashCode();

        if (isIt) {
            return true;
        }
        return false;
    }
}
