import java.sql.*;
import java.util.HashMap;
import java.util.Objects;
import java.util.Scanner;

public class ShippingInfo {
    static final String JDBC_DRIVER = "com.mysql.cj.jdbc.Driver";
    static final String DB_URL = "jdbc:mysql://localhost/shipping_info";

    static final String USER = "root";
    static final String PASS = "rajkumaar#23";

    private static void printMenu() {
        System.out.println("Enter the field by which you want to search the product :");
        System.out.println("0) Product ID");
        System.out.println("1) Product Name");
        System.out.println("2) Zipcode");
        System.out.println("3) Mobile");
        System.out.println("4) Image URL");
        System.out.println("5) City Name");
    }


    public static void main(String[] args) {
        HashMap<Integer, String> columnNames = initColumnsMap();
        Connection conn = null;
        PreparedStatement stmt = null;
        try {
            Class.forName(JDBC_DRIVER);

            System.out.println("Connecting to database...");
            conn = DriverManager.getConnection(DB_URL, USER, PASS);

            printMenu();

            Scanner scanner = new Scanner(System.in);
            boolean properValue = false;
            int choice = 0;
            String input = null;
            while (!properValue) {
                choice = scanner.nextInt();
                properValue = choice >= 0 && choice < 5;
                if (!properValue) {
                    System.out.println("Oops! That's an invalid input");
                    printMenu();
                }
            }
            properValue = false;
            while (!properValue) {
                System.out.println("Enter the value for " + columnNames.get(choice));
                input = scanner.next();
                properValue = !input.isEmpty() && !input.isBlank();
            }

            String sql;
            sql = "SELECT * FROM products p JOIN city c ON c.zipcode = p.zipcode ";
            if (Objects.equals(columnNames.get(choice), "city")) {
                sql += "WHERE c." + columnNames.get(choice) + " = ?";
            } else {
                sql += "WHERE p." + columnNames.get(choice) + " = ?";
            }

            stmt = conn.prepareStatement(sql);
            stmt.setString(1, input);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                String name = rs.getString("name");
                String zipcode = rs.getString("zipcode");
                int id = rs.getInt("id");
                String imageURL = rs.getString("image");
                String mobile = rs.getString("mobile");
                String city = rs.getString("city");
                System.out.println("ID : " + id);
                System.out.println("Name : " + name);
                System.out.println("Zipcode : " + zipcode);
                System.out.println("Mobile : " + mobile);
                System.out.println("Image URL : " + imageURL);
                System.out.println("City : " + city);
            }

            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception se) {
            se.printStackTrace();
        } finally {
            try {
                if (stmt != null)
                    stmt.close();
            } catch (SQLException ignored) {

            }
            try {
                if (conn != null)
                    conn.close();
            } catch (SQLException se) {
                se.printStackTrace();
            }
        }

        for (int i = 0; i < 50; i++) {
            System.out.print("*");
        }
        System.out.println("*");
        System.out.println("Goodbye!");
    }

    private static HashMap<Integer, String> initColumnsMap() {
        final HashMap<Integer, String> columnNames = new HashMap<>();
        columnNames.put(0, "id");
        columnNames.put(1, "name");
        columnNames.put(2, "zipcode");
        columnNames.put(3, "mobile");
        columnNames.put(4, "image");
        columnNames.put(5, "city");
        return columnNames;
    }
}
