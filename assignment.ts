enum Weekday {
    Sunday,     // 0
    Monday,     // 1
    Tuesday,    // 2
    Wednesday,  // 3
    Thursday,   // 4
    Friday,     // 5
    Saturday    // 6
}

console.log(Weekday[2]); // Tuesday
console.log(Weekday[4]); // Saturday

enum UserRole {
    Admin = 1,
    User = "USER",
    Guest = 3
}

function getRole(role: UserRole): string {
    return `Vai trò của bạn là: ${role}`;
}

console.log(getRole(UserRole.Admin)); // "Vai trò của bạn là: 1"
console.log(getRole(UserRole.User));  // "Vai trò của bạn là: USER" 

enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}

function getOrderMessage(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return "Đơn hàng đang chờ xử lý.";
        case OrderStatus.Shipped:
            return "Đơn hàng đã được gửi đi.";
        case OrderStatus.Delivered:
            return "Đơn hàng đã đến nơi.";
        case OrderStatus.Cancelled:
            return "Đơn hàng đã bị hủy.";
        default:
            return "Trạng thái không hợp lệ.";
    }
}

console.log(getOrderMessage(OrderStatus.Shipped)); // "Đơn hàng đã được gửi đi."
