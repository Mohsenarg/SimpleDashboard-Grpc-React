using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System;

namespace System
{
    public static class ParserExtension
    {
        #region ToLong

        public static long ToLong(this object value)
        {
            try
            {
                if (value == null)
                    return 0;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt64(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return 0;
                else
                    return long.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public static long ToLong(this object value, long DefaultValue)
        {
            try
            {
                if (value == null)
                    return DefaultValue;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt64(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return DefaultValue;
                else
                    return long.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return DefaultValue;
            }
        }

        public static long? ToLongNull(this object value)
        {
            try
            {
                if (value == null)
                    return null;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt64(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return null;
                else
                    return long.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return null;
            }
        }

        #endregion

        #region ToInt

        public static int ToInt(this object value)
        {
            try
            {
                if (value == null)
                    return 0;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt32(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return 0;
                else
                    return int.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public static int ToInt(this object value, int DefaultValue)
        {
            try
            {
                if (value == null)
                    return DefaultValue;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt32(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return DefaultValue;
                else
                    return int.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return DefaultValue;
            }
        }

        public static int? ToIntNull(this object value)
        {
            try
            {
                if (value == null)
                    return null;
                else if ((value is long)
                                    || (value is int)
                                    || (value is short)
                                    || (value is byte)
                                    || (value is float)
                                    || (value is decimal)
                                    || (value is double))
                    return Convert.ToInt32(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return null;
                else
                    return int.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return null;
            }
        }

        #endregion

        #region ToShort

        public static short ToShort(this object value)
        {
            try
            {
                if (value == null)
                    return 0;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt16(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return 0;
                else
                    return short.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public static short ToShort(this object value, short DefaultValue)
        {
            try
            {
                if (value == null)
                    return DefaultValue;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt16(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return DefaultValue;
                else
                    return short.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return DefaultValue;
            }
        }

        public static short? ToShortNull(this object value)
        {
            try
            {
                if (value == null)
                    return null;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToInt16(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return null;
                else
                    return short.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return null;
            }
        }

        #endregion

        #region ToByte

        public static byte ToByte(this object value)
        {
            try
            {
                if (value == null)
                    return 0;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToByte(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return 0;
                else
                    return byte.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return 0;
            }
        }

        public static byte ToByte(this object value, byte DefaultValue)
        {
            try
            {
                if (value == null)
                    return DefaultValue;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToByte(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return DefaultValue;
                else
                    return byte.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return DefaultValue;
            }
        }

        public static byte? ToByteNull(this object value)
        {
            try
            {
                if (value == null)
                    return null;
                else if ((value is long)
                    || (value is int)
                    || (value is short)
                    || (value is byte)
                    || (value is float)
                    || (value is decimal)
                    || (value is double))
                    return Convert.ToByte(value);
                else if ((value is string) && string.IsNullOrEmpty(value.ToString()))
                    return null;
                else
                    return byte.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return null;
            }
        }

        #endregion

        #region ToString

        public static string ToStringValue(this object value)
        {
            try
            {
                if (value == null)
                    return "";
                else
                    return value.ToString();
            }
            catch (Exception e)
            {
                return "";
            }
        }

        public static string ToStringValue(this object value, string DefaultValue)
        {
            try
            {
                if (value == null)
                    return DefaultValue;
                else
                    return value.ToString();
            }
            catch (Exception e)
            {
                return DefaultValue;
            }
        }

        #endregion

        #region ToBoolean

        public static bool ToBoolean(this object value)
        {
            try
            {
                if (value == null)
                    return false;
                else
                    return bool.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public static bool? ToBooleanNull(this object value)
        {
            try
            {
                if (value == null)
                    return null;
                else
                    return bool.Parse(value.ToString());
            }
            catch (Exception e)
            {
                return null;
            }
        }

        #endregion
    }
}
