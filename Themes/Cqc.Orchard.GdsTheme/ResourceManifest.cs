using OrchardCore.ResourceManagement;

namespace Cqc.Orchard.GdsTheme
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(IResourceManifestBuilder builder)
        {
            var manifest = builder.Add();

            manifest
                .DefineStyle("GDS")
                .SetUrl("~/Cqc.Orchard.GdsTheme/gds.min.css", "~/Cqc.Orchard.GdsTheme/gds.min.css")
                .SetVersion("3.9.0");

            manifest
                .DefineScript("GDS")
                .SetUrl("~/Cqc.Orchard.GdsTheme/gds.min.js", "~/Cqc.Orchard.GdsTheme/gds.js")
                .SetVersion("3.9.0");
        }
    }
}
