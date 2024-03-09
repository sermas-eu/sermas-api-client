/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VideoContentDto } from './VideoContentDto';
export type VideoUIContentDto = {
    appId: string;
    /**
     * Reference to the authenticated client the request originated from
     */
    clientId?: string;
    /**
     * Reference to the user interacting with the system
     */
    userId?: string;
    /**
     * Track the interaction session, if available
     */
    sessionId?: string;
    contentType: 'video' | 'image' | 'pdf' | 'webpage' | 'object' | 'text' | 'email' | 'html' | 'link' | 'dialogue-message' | 'navigation' | 'buttons' | 'quiz' | 'clear-screen';
    content: VideoContentDto;
    metadata?: Record<string, any>;
    options: Record<string, any>;
    chunkId?: number;
    messageId?: string;
};

