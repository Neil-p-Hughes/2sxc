﻿using DotNetNuke.Entities.Portals;
using DotNetNuke.Services.FileSystem;
using ToSic.Eav.Apps.ImportExport;
using ToSic.Eav.ImportExport.Environment;
using ToSic.SexyContent.Adam;

namespace ToSic.SexyContent.ImportExport
{
    public class ToSxcXmlExporter: XmlExporter
    {
        private readonly IFileManager _dnnFiles = FileManager.Instance;
        internal AdamManager AdamManager;

        //public ToSxcXmlExporter(int zoneId, int appId, bool appExport, string[] contentTypeIds, string[] entityIds)// :base(zoneId, appId)
        //{
        //    // do things first

        //    var app = new App(zoneId, appId, PortalSettings.Current);
        //    AdamManager = new AdamManager(PortalSettings.Current.PortalId, app);
        //    Constructor(app.AppGuid, appExport, contentTypeIds, entityIds);

        //    // do following things
        //    // this must happen very early, to ensure that the file-lists etc. are correct for exporting when used externally
        //    InitExportXDocument(PortalSettings.Current.DefaultLanguage, Settings.ModuleVersion);

        //}

        public override XmlExporter Init(int zoneId, int appId, bool appExport, string[] attrSetIds, string[] entityIds)
        {
 
            var app = new App(zoneId, appId, PortalSettings.Current);
            AdamManager = new AdamManager(PortalSettings.Current.PortalId, app);
            Constructor(zoneId, appId, app.AppGuid, appExport, attrSetIds, entityIds);

            // do following things
            // this must happen very early, to ensure that the file-lists etc. are correct for exporting when used externally
            InitExportXDocument(PortalSettings.Current.DefaultLanguage, Settings.ModuleVersion);

            return this;
        }

        public override void AddFilesToExportQueue()
        {
            // Add Adam Files To Export Queue
            var adamIds = AdamManager.Export.AppFiles;
            adamIds.ForEach(AddFileAndFolderToQueue);

            // also add folders in adam - because empty folders may also have metadata assigned
            var adamFolders = AdamManager.Export.AppFolders;
            adamFolders.ForEach(ReferencedFolderIds.Add);
        }

        protected override void AddFileAndFolderToQueue(int fileNum)
        {
            try
            {
                ReferencedFileIds.Add(fileNum);

                // also try to remember the folder
                try
                {
                    var file = _dnnFiles.GetFile(fileNum);
                    ReferencedFolderIds.Add(file.FolderId);
                }
                catch
                {
                    // don't do anything, because if the file doesn't exist, its FOLDER should also not land in the queue
                }
            }
            catch
            {
                // don't do anything, because if the file doesn't exist, it should also not land in the queue
            }
        }

        protected override string ResolveFolderId(int folderId)
        {
            var folderController = FolderManager.Instance;
            var folder = folderController.GetFolder(folderId);
            return folder?.FolderPath;
        }

        protected override TennantFileItem ResolveFile(int fileId)
        {
            var fileController = FileManager.Instance;
            var file = fileController.GetFile(fileId);
            return new TennantFileItem
            {
                Id = fileId,
                RelativePath = file?.RelativePath.Replace('/', '\\'),
                Path = file?.PhysicalPath
            };
        }

    }
}