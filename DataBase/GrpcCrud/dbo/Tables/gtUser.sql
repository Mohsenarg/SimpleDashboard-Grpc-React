CREATE TABLE [dbo].[gtUser](
	[Id] [bigint] IDENTITY(100,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[LastName] [nvarchar](50) NOT NULL,
	[IsFemale] [bit] NOT NULL,
	[Address] [nvarchar](150) NULL,
	[Email] [nvarchar](100) NOT NULL,
	[Password] [nvarchar](90) NOT NULL,
 CONSTRAINT [PK_gtUser] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]