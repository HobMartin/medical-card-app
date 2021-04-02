import React from "react";
import { Card, Col, Row } from "antd";
import "./feed.css";
import { listFeed } from "./listFeed";

export function Feed() {
  const { Meta } = Card;
  return (
    <div>
      <Row justify="space-between" gutter={{ xs: 24, sm: 12, md: 8, lg: 6 }}>
        {listFeed.map((feed) => {
          return (
            <>
              <Col>
                <Card
                  hoverable
                  className="feed-card"
                  size="small"
                  cover={<img alt={feed.title} src={feed.image} />}
                >
                  <Meta title={feed.title} description={feed.description} />
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
}
