using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Helper;

public static class Utilities
{
    private static Random random = new Random();

    public static string RandomString(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[random.Next(s.Length)]).ToArray());
    }
    public static bool IsNotNull(this string s)
    {
        return !string.IsNullOrEmpty(s);
    }
    public static bool IsEmail(this string s)
    {
        if (s.IsNotNull() && new EmailAddressAttribute().IsValid(s))
            return true;
        return false;
    }


    public static DateOnly ToDateOnly(this string dateString, string format)
    {
        DateTime dateTime = DateTime.ParseExact(dateString, format, System.Globalization.CultureInfo.InvariantCulture);
        return new DateOnly(dateTime.Year, dateTime.Month, dateTime.Day);
    }
}
