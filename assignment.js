var Weekday;
(function (Weekday) {
    Weekday[Weekday["Sunday"] = 0] = "Sunday";
    Weekday[Weekday["Monday"] = 1] = "Monday";
    Weekday[Weekday["Tuesday"] = 2] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 3] = "Wednesday";
    Weekday[Weekday["Thursday"] = 4] = "Thursday";
    Weekday[Weekday["Friday"] = 5] = "Friday";
    Weekday[Weekday["Saturday"] = 6] = "Saturday"; // 6
})(Weekday || (Weekday = {}));
console.log(Weekday[2]); // Tuesday
console.log(Weekday[4]); // Saturday
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 1] = "Admin";
    UserRole["User"] = "USER";
    UserRole[UserRole["Guest"] = 3] = "Guest";
})(UserRole || (UserRole = {}));
function getRole(role) {
    return "Vai tr\u00F2 c\u1EE7a b\u1EA1n l\u00E0: ".concat(role);
}
console.log(getRole(UserRole.Admin)); // "Vai trò của bạn là: 1"
console.log(getRole(UserRole.User)); // "Vai trò của bạn là: USER" 
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Cancelled"] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
function getOrderMessage(status) {
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
