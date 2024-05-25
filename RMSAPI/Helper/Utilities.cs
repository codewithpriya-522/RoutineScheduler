﻿using System.ComponentModel.DataAnnotations;

namespace RMSAPI.Helper;

/// <summary>
/// Utilitiy class to handle basic common functions
/// </summary>
public static class Utilities
{
    private readonly static Random _random = new();
    /// <summary>
    /// Randoms the string.
    /// </summary>
    /// <param name="length">The length.</param>
    /// <returns>Random string with the provided length</returns>
    public static string RandomString(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return new string(Enumerable.Repeat(chars, length)
            .Select(s => s[_random.Next(s.Length)]).ToArray());
    }
    /// <summary>
    /// Determines whether [is not null].
    /// </summary>
    /// <param name="s">The s.</param>
    /// <returns>
    ///   <c>true</c> if [is not null] [the specified s]; otherwise, <c>false</c>.
    /// </returns>
    public static bool IsNotNull(this string s)
    {
        return !string.IsNullOrEmpty(s);
    }
    /// <summary>
    /// Determines whether this instance is email.
    /// </summary>
    /// <param name="s">The s.</param>
    /// <returns>
    ///   <c>true</c> if the specified s is email; otherwise, <c>false</c>.
    /// </returns>
    public static bool IsEmail(this string s)
    {
        if (s.IsNotNull() && new EmailAddressAttribute().IsValid(s))
            return true;
        return false;
    }

    /// <summary>
    /// Converts to dateonly.
    /// </summary>
    /// <param name="dateString">The date string.</param>
    /// <param name="format">The format.</param>
    /// <returns>Return dateonly from string using formart</returns>
    public static DateOnly ToDateOnly(this string dateString, string format)
    {
        DateTime dateTime = DateTime.ParseExact(dateString, format, System.Globalization.CultureInfo.InvariantCulture);
        return new DateOnly(dateTime.Year, dateTime.Month, dateTime.Day);
    }
    /// <summary>
    /// Converts the DateOnly instance to a string based on the provided format.
    /// </summary>
    /// <param name="date">The DateOnly instance to be converted.</param>
    /// <param name="format">The string format to use for conversion.</param>
    /// <returns>A string representation of the DateOnly instance in the specified format.</returns>
    public static string ToString(this DateOnly date, string format)
    {
        return date.ToString(format);
    }
    /// <summary>
    /// Generate the username based on firstname and last name
    /// </summary>
    /// <param name="firstName"></param>
    /// <param name="lastName"></param>
    /// <returns>Username format is firstname.lastname@rms</returns>
    public static string GenerateUsername(string firstName, string lastName)
    {
        if (Utilities.IsNotNull(firstName) && Utilities.IsNotNull(lastName))
            return $"{firstName}.{lastName}@rms".ToLower();
        else if (Utilities.IsNotNull(firstName))
            return $"{firstName}@rms".ToLower();
        else if (Utilities.IsNotNull(lastName))
            return $"{lastName}@rms".ToLower();
        return "testuser@rms";
    }
    /// <summary>
    /// Gets the full name.
    /// </summary>
    /// <param name="firstname">The firstname.</param>
    /// <param name="lastname">The lastname.</param>
    /// <returns></returns>
    public static string GetFullName(string firstname, string lastname)
    {
        return $"{firstname} {lastname}";
    }
}
