package connection;

import java.sql.Connection;
import java.sql.DriverManager;


public class DBConnection {
    Connection connection;
    static String bd = "mydb";
    static String port = "3307";
    static String login = "root";
    static String password = "admin";

    public DBConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            String url = "jdbc:mysql://localhost:"+this.port+ "/"+this.bd;
            connection = DriverManager.getConnection(url,this.login,this.password);
            System.out.println("Conexión exitosa");
        } catch (Exception ex) {
            System.out.println("Error en la conexión");
        }
            
    }

    public Connection getConnection() {
        return connection;
    }

    public void setConnection(Connection connection) {
        this.connection = connection;
    }
    
    public void desconectar(){
        connection = null;
    }
    
}