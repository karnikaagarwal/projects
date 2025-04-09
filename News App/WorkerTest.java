/**/
class Worker { 
    String name; 
    double salaryRate; 
    Worker(String name, double salaryRate) { 
        this.name = name; 
        this.salaryRate = salaryRate; 
    } 
    double computePay(int hours) { 
        return 0; 
    } 
} 
    
class DailyWorker extends Worker { 
    DailyWorker(String name, double salaryRate) { 
        super(name, salaryRate); 
    } 
    double computePay(int hours) { 
        int daysWorked = hours / 8; 
        return daysWorked * salaryRate; 
    } 
} 
    
class SalariedWorker extends Worker { 
    SalariedWorker(String name, double salaryRate) { 
        super(name, salaryRate); 
    } 
    double computePay(int hours) { 
        return salaryRate; 
    } 
} 
    
public class WorkerTest { 
    public static void main(String[] args) { 
        Worker w1 = new DailyWorker("John", 500); 
        Worker w2 = new SalariedWorker("Alice", 20000); 
        System.out.println("John's Pay: ₹" + w1.computePay(40)); 
        System.out.println("Alice's Pay: ₹" + w2.computePay(40)); 
    } 
}
    