function WaitAliasChildExample()
{
  // Specifies the Alias object
  var AliasObj = Aliases.notepad;
  // Checks whether the Font window has appeared within 10 seconds
  if (AliasObj.WaitAliasChild("dlgFont", 10000).Exists )
    Log.Message("The Font window has appeared")
  else
    Log.Error("The Font window has not appeared.");
}