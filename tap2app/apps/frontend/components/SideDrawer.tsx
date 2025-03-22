"use client";
import { useState, useEffect } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';
import { BACKEND_URL } from '@/config';

type Project = {
  id: string;
  description: string;
  createdAt: string;
};

export function SideDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { getToken } = useAuth();
  
  useEffect(() => {
    async function fetchProjects() {
      try {
        const token = await getToken();
        const response = await axios.get(`${BACKEND_URL}/getProjects`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("Get Projects Response",response.data)
        
        // Check if response.data is an array or wrap it in an array if it's a single object
        const projectData = Array.isArray(response.data) 
          ? response.data 
          : response.data ? [response.data] : [];
          
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchProjects();
  }, [getToken]);
  
  return (
    <div 
      className="fixed left-0 top-16 bottom-0 w-10 z-40" // Changed top from 0 to 16 to position below navbar
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger className="sr-only">Open Menu</DrawerTrigger>
        <DrawerContent 
          className="w-64 p-4 mt-16" // Added mt-16 to start content below navbar
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Your Projects</h2>
            {loading ? (
              <p className="text-muted-foreground">Loading projects...</p>
            ) : projects.length > 0 ? (
              <nav className="flex flex-col gap-2">
                {projects.map(project => (
                  <a 
                    key={project.id} 
                    href={`/project/${project.id}`} 
                    className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    {project.description || "Untitled Project"}
                  </a>
                ))}
              </nav>
            ) : (
              <p className="text-muted-foreground">No projects found. Create one to get started!</p>
            )}
            

          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
} 