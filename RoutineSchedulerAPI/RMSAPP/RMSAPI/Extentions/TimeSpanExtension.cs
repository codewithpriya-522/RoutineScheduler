using System.Globalization;
namespace RMSAPI.Extentions;

public static class TimeSlotExtensions
{
    public static TimeSpan ToTimeSpan(this string timeString)
    {
        if (TimeSpan.TryParseExact(timeString, "hh\\:mm", CultureInfo.InvariantCulture, out TimeSpan timeSpan24))
        {
            return timeSpan24;
        }

        if (TimeSpan.TryParseExact(timeString, "hh\\:mm tt", CultureInfo.InvariantCulture, out TimeSpan timeSpan12))
        {
            return timeSpan12;
        }

        throw new FormatException($"Invalid time format: {timeString}. Expected formats are 'hh:mm' or 'hh:mm tt'.");
    }

    public static string ToTimeString(this TimeSpan timeSpan, bool use24HourFormat = true)
    {
        if (use24HourFormat)
        {
            return timeSpan.ToString("hh\\:mm", CultureInfo.InvariantCulture);
        }
        else
        {
            DateTime dateTime = DateTime.Today.Add(timeSpan);
            return dateTime.ToString("hh:mm tt", CultureInfo.InvariantCulture);
        }
    }
}
