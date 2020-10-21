using OrchardCore.ResourceManagement;

namespace Cqc.Orchard.GdsAdminTheme
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(IResourceManifestBuilder builder)
        {
            var manifest = builder.Add();

            manifest
                .DefineScript("TinyMCE")
                .SetUrl("~/Cqc.Orchard.GdsAdminTheme/tinymce/jquery.tinymce.min.js", "~/Cqc.Orchard.GdsAdminTheme/tinymce/tinymce.js")
                .SetVersion("5.4.2");
        }
    }
}
