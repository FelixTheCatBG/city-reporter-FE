"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CommentItem from '../../components/comment-item';
import { useParams, useRouter } from 'next/navigation';
import { getReportById, getCommentsByReportId, submitComment } from './reportPreviewService';
import styles from './reportPreviewStyles';
import Image from 'next/image';


const Report = () => {
  const [report, setReport] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState('');
  const router = useRouter();
  let { id } = useParams();


  useEffect(() => {
    if (router.query && router.query.id) {
      setId(router.query.id);
    }
  }, [router.query]);

  useEffect(() => {
    const fetchReportDetails = async () => {
      try {
        if(id){
          const reportData = await getReportById(id);
          setReport(reportData);
          const commentsData = await getCommentsByReportId(id);
          setComments(commentsData);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching report details:', error);
        setLoading(false);
      }
    };

    fetchReportDetails();
  }, [id]);


  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    const commentData = {
      reportId: id,
      commentContent: newComment
    };

    try {
      const response = await submitComment(commentData);
      if (response.status === 201) {
        console.log('Comment submitted successfully');
        const updatedComments = await getCommentsByReportId(id);
        setComments(updatedComments);
        setNewComment('');
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!report) {
    return <p>No report found</p>;
  }
  return (
    <Box sx={styles.container}>
        <Box sx={styles.reportContainer}>
        <Image src={`data:image/png;base64,${report.image}`}  width={300} height={200} style={styles.image} />      
          <h2>{report.title}</h2>
          <p>{report.description}</p>
        </Box>
        <Box sx={styles.commentsContainer}>
          {comments.map((comment, index) => (
            <Box key={index} sx={styles.comment}>
              <strong>{comment.name}</strong>
              <p>{comment.commentContent}</p>
            </Box>
          ))}
        </Box>
        <Box sx={styles.commentForm}>
        <CommentItem value={newComment} onChange={handleCommentChange} />
          <Button variant="contained" onClick={handleCommentSubmit} sx={styles.submitButton}>
            Submit
          </Button>
        </Box>
    </Box>
  );
};

export default Report;
