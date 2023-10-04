// Task 1
public class Employee {
  private String name;
  private Date dob;

  public Employee(String name, Date dob) {
    this.name = name;
    this.dob = dob;
  }

  public String getEmpInfo() {
    return "name - " + name + " , dob - " + dob.toString();
  }
}

public class Accountment{
  private Employee employee;
  private int baseSalary;

  public Accountment(Employee employee, int baseSalary){
    this.employee = employee;
    this.baseSalary = baseSalary;
  }

  public int calculateNetSalary() {
    int tax = (int) (baseSalary * 0.25); //calculate in otherway
    return baseSalary - tax;
  }
}



// Task 2
public class Vehicle {
  private int maxSpeed;

  public Vehicle(int maxSpeed) {
    this.maxSpeed = maxSpeed;
  }
  
  public int getMaxSpeed() {
    return this.maxSpeed;
  }

  public double calculateAllowedSpeed(){
    return 0.0;
  }
}

public class Car extends Vehicle {
  public Car(int maxSpeed){
    super(maxSpeed);
  }

  @Override
  public double calculateAllowedSpeed(){
    return super.getMaxSpeed() * 0.8;
  }
}

public class Bus extends Vehicle {
  public Bus(int maxSpeed){
    super(maxSpeed);
  }

  @Override
  public double calculateAllowedSpeed(){
    return super.getMaxSpeed() * 0.6;
  }
}



// Task 3
public interface Shape {
  double area();
}

public interface Volume{
  double volume();
}

public class Circle implements Shape {
  private double radius;

  public Circle(double radius) {
    this.radius = radius;
  }

  @Override
  public double area() {
    return 2 * 3.14 * radius;
  }
}

public class Cube implements Shape, Volume {
  private int edge;

  public Cube(int edge) {
    this.edge = edge;
  }

  @Override
  public double area() {
    return 6 * edge * edge;
  }

  @Override
  public double volume() {
    return edge * edge * edge;
  }
}


// Task 4
public class Rectangle extends Square {
  private int height;

  public void setHeight(int height) {
    this.height = height;
  }

  public int area() {
    return super.width * this.height;
  }
}

public class Square {
  private int width;

  public void setWidth(int width) {
    this.width = width;
  }
}



// Task 5
public class Car {
  private IEngine engine;

  public Car(IEngine engine) {
    this.engine = engine;
  }

  public void start() {
    this.engine.start();
  }
}

public interface IEngine {
  void start();
}

public class PetrolEngine implements IEngine {
  @Override
  public void start() {
  }
}