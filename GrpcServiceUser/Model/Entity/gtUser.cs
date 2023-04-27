namespace UserGrpc.Model.Entity
{
    public class gtUser
    {
		public long Id { get; set; }
		public string Name { get; set; }
		public string LastName { get; set; }
		public bool? IsFemale { get; set; }
		public string? Address { get; set; }
		public string Email { get; set; }
		public string Password { get; set; }
	}
}
