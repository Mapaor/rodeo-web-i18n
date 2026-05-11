export interface Project {
  thumbnail: string;
  videoSrc: string;
  startTime: number;
  aspectRatio: number;
  preferenceDefault: 'videoSrc' | 'thumbnail';
  preferenceHover: 'videoSrc' | 'thumbnail';
  videoUrl: string;
  gallery: string[];
}

export interface ProjectData {
  [key: number]: Project;
}

const projects: ProjectData = {
  1: {
    thumbnail: '/projects/1/no_name_thumbnail.jpg',
    videoSrc: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68df9793002427da7d64/files/6a01bc2f0036656b3e84/view?project=68df9779001407928a77',
    startTime: 0, 
    aspectRatio: 1.778,
    preferenceDefault: 'videoSrc',
    preferenceHover: 'videoSrc',
    videoUrl: 'https://www.youtube.com/embed/tgjj4jjufo0/watch?v',
    gallery: [
      '/projects/1/frame-1.png',
      '/projects/1/frame-2.png',
      '/projects/1/frame-3.png'
    ],
  },
  2: {
    thumbnail: '/projects/2/inquietos_thumbnail.jpg',
    videoSrc: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68df9793002427da7d64/files/6a01ba4f0007ac3b3c69/view?project=68df9779001407928a77',
    startTime: 0, 
    aspectRatio: 1.778,
    preferenceDefault: 'videoSrc',
    preferenceHover: 'videoSrc',
    videoUrl: 'https://www.youtube.com/embed/zwgaP_xKmeU/watch?v',
    gallery: [
      '/projects/2/frame-1.png',
      '/projects/2/frame-2.png',
      '/projects/2/frame-3.png'
    ],
  },
  3: {
    thumbnail: '/projects/3/markuu_thumbnail.jpg',
    videoSrc: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68df9793002427da7d64/files/6a01df1b00004f21db40/view?project=68df9779001407928a77',
    startTime: 0,
    aspectRatio: 1.778,
    preferenceDefault: 'videoSrc',
    preferenceHover: 'videoSrc',
    videoUrl: 'https://www.youtube.com/embed/SSByOsHuNiw?si=7_DgM_CFh5qNdtdX',
    gallery: [
      '/projects/3/frame-1.png',
      '/projects/3/frame-2.png',
      '/projects/3/frame-3.png'
    ],
  },
  4: {
    thumbnail: '/mock_images/4.jpeg',
    videoSrc: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68df9793002427da7d64/files/68df9d490033f2bbf8f7/view?project=68df9779001407928a77',
    startTime: 0,
    aspectRatio: 1.778,
    preferenceDefault: 'videoSrc',
    preferenceHover: 'videoSrc',
    videoUrl: 'https://player.vimeo.com/video/4131364?title=0&byline=0&portrait=0',
    gallery: [
      '/projects/4/4a.webp',
      '/projects/4/4b.webp',
      '/projects/4/4c.webp'
    ],
  },
  5: {
    thumbnail: '/mock_images/5.jpeg',
    videoSrc: 'https://fra.cloud.appwrite.io/v1/storage/buckets/68df9793002427da7d64/files/6a0194e7001277acd688/view?project=68df9779001407928a77',
    startTime: 0,
    aspectRatio: 1.778,
    preferenceDefault: 'videoSrc',
    preferenceHover: 'videoSrc',
    videoUrl: 'https://player.vimeo.com/video/1306133?title=0&byline=0&portrait=0',
    gallery: [
      '/projects/5/5a.webp',
      '/projects/5/5b.webp',
      '/projects/5/5c.webp'
    ],
  }
};

export interface VideoItem {
  id: number;
  title: string;
  client: string;
  thumbnail: string;
  videoSrc: string;
  startTime: number;
  aspectRatio: number;
  preferenceDefault: 'videoSrc' | 'thumbnail';
  preferenceHover: 'videoSrc' | 'thumbnail';
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getVideos = (t: any): VideoItem[] => {
  return Object.entries(projects).map(([id, project]) => {
    let projectTranslation: { title?: string; client?: string } | null = null;

    try {
      projectTranslation = t.raw(`project.projects.${id}`);
    } catch {
      projectTranslation = null;
    }

    return {
      id: parseInt(id),
      title: projectTranslation?.title || `Project ${id}`,
      client: projectTranslation?.client || `Client ${id}`,
      thumbnail: project.thumbnail,
      videoSrc: project.videoSrc,
      startTime: project.startTime || 0,
      aspectRatio: project.aspectRatio,
      preferenceDefault: project.preferenceDefault,
      preferenceHover: project.preferenceHover,
    };
  });
};

export default projects;
